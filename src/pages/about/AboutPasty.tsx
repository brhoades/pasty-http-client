import * as React from "react";
import Container from "semantic-ui-react/dist/es/elements/Container";
import Header from "semantic-ui-react/dist/es/elements/Header";

import IconOrText from "components/IconOrText";

declare var VERSION: string;

const AboutPasty = () => (
  <Container text={true}>
    <Header as="h1">
      <Header.Content>
        Pasty
        <Header.Subheader
          style={{ display: "inline-block", paddingLeft: "0.5em" }}
        >
          React &nbsp;
          <a
            style={{ display: "inline-block", fontSize: "0.7rem" }}
            href={`https://github.com/brhoades/pasty-react/releases/tag/v${VERSION}`}
          >
            v{VERSION}
          </a>
        </Header.Subheader>
      </Header.Content>
    </Header>
    <p>
      Pasty is an anonymous, small file and code storage system written in Typescript. All
      pastes are encrypted client-side before transmission for storage. Submitter pastes are
      solely tied to a server-provided identifier and are hosted from a public S3 bucket. The
      corresponding AES key to each paste never leaves the client, rendering server knowledge
      of the paste's existence useless. No identifying information about the paste's origin is
      retained.
    </p>

    <IconOrText icon="github" text="" />
    <a href="https://github.com/brhoades/pasty-core">Pasty Core</a><br />
    <IconOrText icon="github" text="" />
    <a href="https://github.com/brhoades/pasty-react">Pasty React</a><br />
    <IconOrText icon="github" text="" />
    <a href="https://github.com/brhoades/pasty-cli">Pasty CLI</a><br />
    <IconOrText icon="github" text="" />
    <a href="https://github.com/brhoades/pasty-server">Pasty Server</a><br />
  </Container>
);

export default AboutPasty;
