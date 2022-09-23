const React = require("react");
const DefaultLayout = require("./layouts/Default");

class Index extends React.Component {
  render() {
    const { logs } = this.props;
    console.log(logs);
    return (
      
      <DefaultLayout title={"Logs"}>
        <nav>
        <a href={'/logs/new'}>Create a new log</a>
      </nav>
        <ul>
          {logs.map((log, i) => {
            return (
              <li key={i}>
                {/* each log */}
                <a href={`/logs/${log.id}`}> {log.title}<br />

                {/* ===========EDIT */}
                <a href={`logs/${log._id}/edit`}> Edit Log</a>
                {/* ======Delete */}
                <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                  <input type="submit" value="DELETE" />
                </form>
              </li>
            );
          })}
        </ul>
      </DefaultLayout>
    );
  }
}
module.exports = Index