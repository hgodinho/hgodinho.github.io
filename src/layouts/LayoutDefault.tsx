import { SystemProvider } from "@/provider";
import { cn } from "@/utils";

export default function Layout({ children }: React.PropsWithChildren) {
    return (
        <SystemProvider>
            <main
                className={cn(
                    "text-dark",
                    "bg-light",
                    "dark:bg-dark",
                    "dark:text-light",
                    "w-screen",
                    "min-h-screen",
                    "px-4"
                )}
            >
                {children}
            </main>
        </SystemProvider>
    );
}
