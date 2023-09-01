import "./styles.scss";

export default function Body({ content }) {
  return (
    <div className="body-main">
      <div className="body-links">
        {content?.links.map((x, index) => {
          return (
            <div key={index} className="body-link">
              {x?.label}
            </div>
          );
        })}
      </div>
      <div className="body-text">
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas
          dignissim orci at ullamcorper. Vestibulum commodo sollicitudin nibh,
          et euismod arcu volutpat in. Nulla et diam ex. Maecenas id accumsan
          arcu. Sed pharetra, turpis eu tincidunt ultrices, nunc mauris mollis
          ex, et auctor ligula odio eu enim. Aliquam id posuere nisl. Fusce
          bibendum viverra libero sit amet volutpat. Phasellus convallis id nunc
          in congue. In malesuada tincidunt sapien vel placerat. In porttitor
          nibh nibh, ac egestas odio tempor ac. Quisque iaculis justo enim,
          vitae interdum risus vestibulum et. Vestibulum malesuada porttitor
          nisl a ornare. Cras tortor ex, aliquam vel enim a, porttitor accumsan
          erat. Suspendisse finibus facilisis felis ut tincidunt.
        </p>
      </div>
    </div>
  );
}
