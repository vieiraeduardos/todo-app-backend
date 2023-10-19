export interface ToDoUpdatedProps {
    code: string, 
    title: string,
    updateAt: Date,
    isCompleted: boolean
}

export interface ToDoProps {
    code: string, 
    title: string,
    createdAt: Date,
    updateAt: Date,
    isCompleted: boolean
}

export class ToDo {
    private props: ToDoProps;

    constructor(props: ToDoProps) {
        this.props = props;        
    }

    getCode() {
        return this.props.code;
    }

    getTitle() {
        return this.props.title;
    }

    getCreatedAt() {
        return this.props.createdAt;
    }

    isCompleted() {
        return this.props.isCompleted;
    }

    setIsCompleted(isCompleted: boolean) {
        this.props.isCompleted = isCompleted;
    }

    setTitle(title: string) {
        this.props.title = title;
    }

    setUpdatedAt(updatedAt: Date) {
        this.props.updateAt = updatedAt;
    }
}