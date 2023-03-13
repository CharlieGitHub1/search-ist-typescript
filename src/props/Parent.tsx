import { ChildTwoWhichIsAFunctionalComponent } from "./Child";

const Parent = () => {
  return (
    <ChildTwoWhichIsAFunctionalComponent
      color="blue"
      onClick={() => console.log("click me")}
    >
      These are my childern
    </ChildTwoWhichIsAFunctionalComponent>
  );
};

export default Parent;
