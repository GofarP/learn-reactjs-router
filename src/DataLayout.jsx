import { Outlet } from "react-router";

export default function DataLayout() {
    return(
        <>
            <div>
                <h1>This is header</h1>
            </div>
            <div>
                <Outlet/>
            </div>
            <div>
                <p>This is footer</p>
            </div>
        </>
    );
};
