import "./styles.scss";

export default function RawData({ data, setApi }) {
  return (
    <div className="rawData-main">
      <label>
        Backend
        <button onClick={setApi}>Proximo exemplo</button>
      </label>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </div>
  );
}
