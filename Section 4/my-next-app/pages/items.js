import fs from 'fs';
import path from 'path';

const ItemsPage = ({ items }) => {
    return (
        <div>
            <h1>Item List</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export const getStaticProps = async () => {
    // Define the file path
    const filePath = path.join(process.cwd(), 'data', 'items.json');
    
    // Read the JSON file
    const jsonData = fs.readFileSync(filePath);
    
    // Parse the JSON data
    const items = JSON.parse(jsonData);
    
    // Return the items as props
    return {
        props: {
            items,
        },
    };
};

export default ItemsPage;

