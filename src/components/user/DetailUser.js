
import { Card } from 'antd';
const DetailUser = () => (
    <>
        <Card
            title="Default size card"
            extra={<a href="*">More</a>}
            style={{
                width: 300,
            }}
        >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
        <Card
            size="small"
            title="Small size card"
            extra={<a href="*">More</a>}
            style={{
                width: 300,
            }}
        >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
    </>
);
export default DetailUser;

