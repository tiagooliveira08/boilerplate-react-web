import { RootStore } from "./rootStore";
import { observable, action, decorate, computed } from "mobx";

interface ITodoList {
  id: number;
  description: string;
  isDone: boolean;
}

export class TodoStore {
  protected rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable
  public todoList = [
    {
      id: 0,
      description: "Desenvolver BoilerPlate",
      isDone: false
    },
    {
      id: 1,
      description: "Ser foda em React",
      isDone: false
    },
    {
      id: 2,
      description: "Aprender Sempre",
      isDone: true
    },
    {
      id: 3,
      description: "Entrar na Cubos",
      isDone: true
    }
  ];

  @action
  public createTodo({ description, isDone }: Omit<ITodoList, "id">) {
    this.todoList.concat({
      id: this.todoList.length + 1,
      description,
      isDone
    });
  }

  @action
  public deleteTodo(id: number) {
    this.todoList = this.todoList.filter(todo => todo.id !== id);
  }

  @action
  public editTodoList(id: number, { description, isDone }: ITodoList) {
    return this.todoList.map(todo => {
      const isCurrentTodo = todo.id === id;

      return {
        id: todo.id,
        description: isCurrentTodo ? description : todo.description,
        isDone: isCurrentTodo ? isDone : todo.isDone
      };
    });
  }

  @computed
  public get todoStatus() {
    return `você tem ${
      (this.todoList || []).filter(todo => todo.isDone).length
    } pra fazer :)`;
  }
}
