import BoxContainer from "../components/BoxContainer";
import Name from "../components/Name";


export default function GuessContainer() {
  return (
    <div className="flex items-center gap-10 mt-10">
      <Name name="Aragorn" />
      <BoxContainer />
    </div>
  )
}
