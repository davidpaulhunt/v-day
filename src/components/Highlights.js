export function Highlight({
  num, text, children
}) {
  return (
    <h1 className="text-5xl capitalize">
      <span style={{
        fontFamily: 'Rubik Doodle Shadow',
        fontSize: '5rem',
      }}>{num}</span> {text}
    </h1>
  )
}

export default function Highlights() {
  return (
    <div className="container flex flex-1 pt-4 flex-col gap-y-4">
        <p className="text-xl">
          🕐 Sometimes you gotta check the facts, so take a look at us by the numbers 🤓
        </p>
        <div className="flex flex-row flex-wrap gap-x-12 gap-y-4 justify-center">
          <Highlight num={1} text="bridge" />
          <Highlight num={2} text="castles" />
          <Highlight num={3} text="countries" />
          <Highlight num={5} text="museums" />
          <Highlight num={"9,000"} text="pictures" />
          <Highlight num={"30,000"} text="miles" />
        </div>
        <Highlight num={"1"} text="year" />
      </div>
  );
}
