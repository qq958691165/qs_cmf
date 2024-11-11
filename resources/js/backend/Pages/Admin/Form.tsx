import {usePage} from "@inertiajs/react";
import {lazy} from "react";
import {ReactComponentLike} from "prop-types";
import {Form} from "@quansitech/antd-admin";

export default function () {
    const props = usePage<any>().props

    const Component = lazy(() => Form) as ReactComponentLike

    return <Form {...props}/>
}