const React = require("react");
const DefaultLayout = require("./layouts/default");
​
class New extends React.Component {
  render() {
    return (
      <DefaultLayout title="New Log">
         <form
          action={`/logs/${this.props.log._id}?_method=PUT`}
          method="POST"
        >
          Title:{" "}
          <input
            type="text"
            name="title"
          />
          <br />
          Entry:{" "}
          <input type="textarea" name="entry"/>
          <br />
          Is ship broken:
          {this.props.student.shipIsBroken ? (
            <input type="checkbox" name="shipIsBroken" defaultChecked />
          ) : (
            <input type="checkbox" name="shipIsBroken" />
          )}
          <br />
          <input type="submit" value="Submit Changes" />
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = New;