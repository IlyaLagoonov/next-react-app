import { Heading } from "../components";
import { withLayout } from "../layout/Layout";

export function Error404(): JSX.Element {

    return (
        <>
            <Heading tag="h3">
                Пока этой страницы нет, но вы можете кликнуть на меню слева и посмотреть другие категории
            </Heading>
        </>
    );
}

export default withLayout(Error404);
