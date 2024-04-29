import TodoContainer from "@/components/Todo/TodoContainer";
import Container from "@/components/ui/Container";

const todo = () => {
  return (
    <Container>
      <h1 className="text-3xl text-center font-bold py-3">Todo Application</h1>
      <TodoContainer />
    </Container>
  );
};

export default todo;
