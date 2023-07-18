const Notification = (props) => {
  const { className, url, text } = props;
  const containerClass = {`notification ${className}`};
  return (
    <div className={containerClass}>
      <img className="icon" src={url} />
      <p className="text">{text}</p>
    </div>
  );
};

const element = (
  <div className="container">
    <h1>Notification</h1>
    <div className="box-con">
        <Notification 
        className="box1" 
        url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png";
        text="information message"
        />
         <Notification 
        className="box2" 
        url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png";
        text="Success message"
        />
         <Notification 
        className="box3" 
        url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png";
        text="Warning message"
        />
         <Notification 
        className="box4" 
        url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png";
        text="Error message"
        />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

