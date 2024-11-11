import {usePage} from "@inertiajs/react";
import {lazy} from "react";
import {Table} from "@quansitech/antd-admin";

export default function () {
    const props = usePage<any>().props

    const Component = lazy(() => Table)

    return <Table {...props}/>
}