interface IProps {
  error: string;
  setError: any;
}

export const PostError = ({ error, setError }: IProps) => {
  return (
    <div className="postError">
      <div className="">{error}</div>
      <button className="blue_btn" onClick={() => setError("")}>
        Try Again
      </button>
    </div>
  );
};
