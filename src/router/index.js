import { createMemoryHistory, createRouter } from "vue-router";
import Base from "@/pages/Base.vue";
import Course from "@/pages/Course.vue";
import FAQ from "@/pages/FAQ.vue";
import HowItWorks from "@/pages/HowItWorks.vue";
import MyAccount from "@/pages/My-account.vue";

const routes = [
    {
        path: "",
        name: "Base",
        component: Base
    },
    {
        path: "/course",
        name: "Course",
        component: Course
    },
    {
        path: "/faq",
        name: "FAQ",
        component: FAQ
    },
    {
        path: "/how-it-works",
        name: "HowItWorks",
        component: HowItWorks
    },
    {
        path: "/my-account",
        name: "MyAccount",
        component: MyAccount
    },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;