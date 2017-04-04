const util = require("./util");
const crypto = require("./crypto");

function uploadFile(crypted_data, cb, msg) {
  msg("Getting configuration...");
  util.getConfig((config) => {
    msg("Uploading...");
    $.ajax({
      type: "POST",
      url: config.paste,
      data: {
        data: crypted_data.data
      },
      success: (response) => cb(response, crypted_data.key),
      error: (response) => {
        return msg(`Error uploading: ${response}`);
      }
    });
  });
}

function getFile(id, cb) {
  console.log("Getting file");
  util.getConfig((config) => {
    console.log("Getting config");
    console.log(`${config.get}${id}`);
    $.ajax({
      type: "GET",
      url: `${config.get}${id}`,
      success: cb,
      complete: (xhr, status) => {
        if(xhr.status == 302) {
          return $.ajax({
            type: "GET",
            url: xhr.getResponseHeader("Location"),
            success: cb
          });
        }
      }
    });
  });
}

function previewFile(file, err) {
  let reader  = new FileReader();

  reader.addEventListener("load", () => {
    uploadFile(crypto.encryptFile(file, reader), (res, key) => {
      window.location.href = `#/view/${res.filename}/${encodeURIComponent(key)}`;
    }, err);
  }, false);

  if(file) {
    reader.readAsDataURL(file._file);
  }
}


module.exports = {
  uploadHook: (file, msg, state) => {
    previewFile(file, msg, state);
    done("Uploaded");
  },
  view: (file, key, loadingMessage, errorMessage, dataCb) => {
    getFile(file, (response) => {
      loadingMessage("Decrypting...");
      let data = crypto.decryptFile(response, key);

      data.fileDataB64 = () => {
        return `data:${data.mime};base64,${data.data}`;
      };

      data.fileDataB64Download = () => {
        return `data:application/octet-stream;base64,${data.data}`;
      };

      loadingMessage("Displaying...");
      dataCb(data);
    });
  }
};
