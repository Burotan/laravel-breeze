import { Page } from "@inertiajs/core";
import { usePage } from "@inertiajs/react";
import { PageProps } from "@inertiajs/core/types/types";

export interface InertiaSharedProps {
    ziggy: {
        defaults: [];
        routes: any;
        port: string | null;
        url: string;
    };
    auth: {
        user: {
            id: number;
            name: string;
            username: string;
            acronym: string;
            email: string;
            picture: string;
            email_verified_at: string | null;
            admin: boolean;
        };
    };
    errorBags: any;
    errors: any;
}

export default function useTypedPage<T extends PageProps = PageProps>(): Page<
    T & InertiaSharedProps
> {
    const page = usePage();
    return page as Page<T & InertiaSharedProps>;
}
