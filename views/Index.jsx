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
                        <a href={`/logs/${log.id}`}>{log.title}</a>
                        <a href={`/logs/${log.id}/edit`}>Edit Log</a>
                        <form action={`/logs/${log.id}?_method=DELETE`} method="POST">
                            <input type="submit" value="DELETE" />
                        </form>
                    </li>
                )
            })}
        </ul>
      </DefaultLayout>
    );
  }
}

module.exports = Index;