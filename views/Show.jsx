const React = require("react");
const DefaultLayout = require("./layouts/default");

class Show extends React.Component {
  render() {
    const {log}= this.props;
      return (
      <DefaultLayout title={"Captain's log"}>
        <div>
            <nav>
                <a href="/logs"> Go back</a>
            </nav>
            {log.title} <br />
            {log.entry} <br />
            {log.shipIsBroken ? "Ship is broken" : "Ship is NOT broken"}
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Show;