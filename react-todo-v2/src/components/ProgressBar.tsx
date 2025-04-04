import {Progress} from "@/components/ui/progress.tsx";
import {useTodo} from "@/hooks/useTodo.tsx";

export default function ProgressBar() {
    function calculateProgress() {
        // This function should return a number between 0 and 100
        // representing the progress of the user's tasks
        // For example, if the user has completed 2 out of 5 tasks,
        // this function should return 40

        const { todos } = useTodo();
        const completedTasks = todos.filter(todo => todo.taskStatus === "completed");

        return (completedTasks.length / todos.length) * 100;
    }

    return (
        <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-semibold">{calculateProgress() ? calculateProgress() : "0%"}</span>
            <Progress value={calculateProgress()} className="w-full"></Progress>
        </div>
    );
}