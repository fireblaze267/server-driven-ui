import "./styles.scss";

export default function LoadingPage() {
  return (
    <div className="loading-main">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
