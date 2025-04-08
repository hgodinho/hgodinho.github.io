import vikeReact from "vike-react/config";
import type { Config } from "vike/types";
import Layout from "../layouts/LayoutDefault";

export default {
    Layout,

    title: "Pasta de Henrique Godinho",
    description: "Coleção de sites e projetos criados por @hgodinho",

    extends: vikeReact,

    prerender: true,

    host: true,
} satisfies Config;
