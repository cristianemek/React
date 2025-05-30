interface Props {
  tittle?: string;
  subtittle?: string;
}

export const FirstApp = ({tittle="titulo",subtittle}: Props )=> {
  return (
    <>
        <h1>{tittle}</h1>
      {/* <h1>{JSON.stringify(newMessage)}</h1> */}
      <p>{subtittle}</p>
    </>
  );
};

