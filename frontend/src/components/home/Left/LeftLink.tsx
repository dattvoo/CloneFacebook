interface IProps {
  imgLink: string;
  text: string;
  notification: string|undefined;
}

export const LeftLink = ({ imgLink, text, notification }: IProps) => {
  return (
    <div className="left_link">
      <img src={`../../../left/${imgLink}.png`} alt="fail" />
      {notification !== undefined ? (
        <div className="col">
          <div className="col_1">{text}</div>
          <div className="col_2">{notification}</div>
        </div>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
};
