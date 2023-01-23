import { Avatar, Button, List, Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import { OrganizationListAsync } from '../../Redux/Reducers/OrganizationReducers/OrganizationListReducer';
import { useDispatch, useSelector } from "react-redux";

const ListOrganization = () => {
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setInitLoading(false);
        dispatch(OrganizationListAsync());
    }, [dispatch]);
    const onLoadMore = () => {
        setLoading(true);
    };
    const loadMore =
        !initLoading && !loading ? (
            <div
                style={{
                    textAlign: 'center',
                    marginTop: 12,
                    height: 32,
                    lineHeight: '32px',
                }}
            >
                <Button onClick={onLoadMore}>loading more</Button>
            </div>
        ) : null;
    const org = useSelector(store => store.OrganizationList.OrganizationList)
    console.log(org);
    return (
        <List
            className="demo-loadmore-list"
            loading={initLoading}
            itemLayout="horizontal"
            loadMore={loadMore}
            dataSource={org}
            renderItem={(item) => (
                <List.Item
                    actions={[<a key="list-loadmore-edit" href='/organization/edit'>edit</a>, <a key="list-loadmore-more" href='/organization/create'>create</a>, <a key="list-loadmore-more" href='/organization/details'>details</a>]}
                >
                    <Skeleton avatar title={false} loading={item.loading} active>
                        <List.Item.Meta
                            avatar={<Avatar src="https://w7.pngwing.com/pngs/574/369/png-transparent-avatar-computer-icons-user-random-icons-purple-blue-heroes.png" />}
                            title={<a href="https://ant.design">{item.name} </a>}
                            description={`members ${item.members}`}

                        />
                    </Skeleton>
                </List.Item>
            )}
        />
    );
};
export default ListOrganization;
