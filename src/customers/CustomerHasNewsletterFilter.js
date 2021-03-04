import MailIcon from "@material-ui/icons/MailOutline";
import { FilterList, FilterListItem } from "react-admin";

export const HasNewsletterFilter = () => (
    <FilterList label="Has newsletter" icon={<MailIcon />}>
        <FilterListItem label="True" value={{ has_newsletter: true }} />
        <FilterListItem label="False" value={{ has_newsletter: false }} />
    </FilterList>
);
