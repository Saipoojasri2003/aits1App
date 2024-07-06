const people=
[
    'Creola Katherine Jhonson:Mathematician',
    'Salin Ali:Arnithologist',
    'Mario Jose Molina-Pasquel Henriquez:Chemist',
    'Mohammad Abdus Salam:Physict',
    'Percy Lavon julican:Chemist',
    'Subramanyam ChandraSekhar:astrophysicist'
];
export default function pplist()
{
    const listItems=people.map(person=>
        <li>{person}</li>
    );
    return<ul>{listItems}</ul>;
}
