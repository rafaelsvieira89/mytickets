import {Container} from "@/components/container";
import {OrganizationForm} from "@/app/organization/components/form";

export default function NewOrganization(){
    return(
        <Container>
            <div>
                <h1>Organização</h1>
                <OrganizationForm/>
            </div>
        </Container>
    )
}