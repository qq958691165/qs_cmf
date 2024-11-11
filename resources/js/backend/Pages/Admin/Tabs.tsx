import {usePage} from "@inertiajs/react";
import {Tabs} from "@quansitech/antd-admin";

export default function () {
    const props = usePage<any>().props

    return <>
        <Tabs {...props}></Tabs>
    </>
}