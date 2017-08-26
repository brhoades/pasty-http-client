import * as React from "react";
import { Container, Header, Icon } from "semantic-ui-react";


const AboutPasty = () => (
  <Container text={true}>
    <Header as='h1'>
      <Header.Content>
        Pasty
        <Header.Subheader
          style={{
            display: "inline-block",
            paddingLeft: "0.5em",
          }}
        >
          HTTP Client
        </Header.Subheader>
      </Header.Content>
    </Header>
    <p>
      Pasty is an anonymous, small file and code storage system written in Javascript. All
      pastes are encrypted client-side before transmission for storage. Submitter pastes are
      solely tied to a server-provided identifier and are hosted from a public S3 bucket. The
      corresponding AES key to each paste never leaves the client, rendering server knowledge
      of the paste's existence useless. No identifying information about the paste's origin is
      retained.
    </p>

    <Icon name="github" />
    <a href="https://github.com/brhoades/pasty-core">Pasty Core</a><br />
    <Icon name="github" />
    <a href="https://github.com/brhoades/pasty-http-client">Pasty HTTP Client</a><br />
    <Icon name="github" />
    <a href="https://github.com/brhoades/pasty-cli">Pasty CLI</a><br />
    <Icon name="github" />
    <a href="https://github.com/brhoades/pasty-server">Pasty Server</a><br />
  </Container>
);

export default AboutPasty;
