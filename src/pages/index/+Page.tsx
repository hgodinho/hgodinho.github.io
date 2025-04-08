import { useSystemProvider } from "@/provider";

export default function Page() {
    const projects = [
        {
            title: "Curriculum-vitae",
            description:
                "Cada elemento relevante de um currículo pessoal — como a pessoa em si, suas conexões, formação acadêmica, experiência profissional, projetos e outras informações pertinentes — são descritos por classes do schema.org, um vocabulário padronizado para dados estruturados na web, e representados em um grafo, sendo os vértices as entidades e as arestas suas relações.",
            url: "https://hgod.in/cv",
            tags: [
                "pessoal",
                "curriculum-vitae",
                "grafo",
                "schema.org",
                "linked-data",
            ],
        },
        {
            title: "elucidario.art",
            description:
                "O elucidario.art é um Sistema de Gestão de Coleções abrangente e flexível, projetado para atender às necessidades de museus, galerias, colecionadores particulares e outras instituições que lidam com a gestão de acervos e coleções. O app oferece um conjunto completo de ferramentas para a criação, organização, documentação e compartilhamento de informações sobre coleções museológicas.",
            url: "https://elucidario.art",
            tags: [
                "sistema de gestão de coleções",
                "arte",
                "cultura",
                "catalogação",
                "documentação",
                "museus",
                "patrimônio",
                "linked-data",
                "inteligência artificial",
            ],
        },
        {
            title: "paletaaa",
            description:
                "paletaaa é uma ferramenta para designers, profissionais de UX e desenvolvedores front-end que buscam garantir a acessibilidade de sistemas complexos de cores em seus produtos. Trata-se de uma aplicação web que permite criar paletas de cores, testá-las quanto à acessibilidade e visualizar suas inter-relações.",
            url: "https://hgod.in/paletaaa",
            tags: ["acessibilidade", "wcag", "a11y", "cores", "design", "ux"],
        },
    ];

    const { theme } = useSystemProvider();

    return (
        <div className="flex flex-col max-w-3xl mx-auto gap-3">
            <header className="py-4 lg:sticky lg:top-0 text-dark bg-light dark:bg-dark dark:text-light">
                <h1 className="text-3xl font-bold italic">
                    Pasta - Henrique Godinho
                </h1>
                <p className="text-lg">
                    Coleção de sites e projetos criados por{" "}
                    <a
                        href="mailto:ola+site@hgod.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Email link"
                        className="text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-500 font-semibold underline"
                    >
                        @hgodinho
                    </a>
                </p>
            </header>
            <ul className="flex flex-col gap-4 min-h-full">
                {projects.map((project) => {
                    return (
                        <li
                            key={project.title}
                            className="border p-4 rounded-md text-lg flex flex-col gap-2"
                        >
                            <a
                                href={project.url}
                                className="text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-500 font-semibold underline"
                            >
                                {project.title}
                            </a>
                            <p className="italic">{project.description}</p>
                            <p className="text-base text-gray-500 dark:text-gray-400">
                                {project.tags.map((tag, index) => {
                                    return (
                                        <span key={index}>
                                            {tag}
                                            {index < project.tags.length - 1
                                                ? ", "
                                                : ""}
                                        </span>
                                    );
                                })}
                            </p>
                        </li>
                    );
                })}
            </ul>
            <footer className="sticky py-2 bottom-0 text-dark bg-light dark:bg-dark dark:text-light">
                <a
                    href="https://github.com/hgodinho"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile link"
                >
                    <img
                        height="16"
                        width="16"
                        alt="GitHub"
                        src={`https://cdn.simpleicons.org/github/${
                            theme === "dark" ? "white" : "black"
                        }`}
                    />
                </a>
            </footer>
        </div>
    );
}
