import { useContext } from "react";
import { Outlet, useParams } from "react-router-dom";
import Card from "../component/Card/Card";
import CardTitle from "../component/Card/CardTitle";

import CardContent from '../component/Card/CardContent';

function PriorityOption({ label, value }) {
    const styles = {
        border: '1px solid firebrick',
        borderRadius: '6px',
        padding: '0.5rem 1rem'
    }

    return (<span style={styles}>{label}</span>)
}

export default function AboutPage() {
    

    return (
        <div>
            <h1>About Us Page</h1>
            <Card>
                <CardTitle><h1>Carla Auditore</h1></CardTitle>
                <CardContent>Not Assasin</CardContent>
            </Card>
            <Card
                renderPriorities={PriorityOption}
            >
                <CardTitle><h1>Ezio Auditore</h1></CardTitle>
                <CardContent>Assasin Team Lead</CardContent>
            </Card>
            
        </div>
    )
}