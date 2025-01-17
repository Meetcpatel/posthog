import { useActions } from 'kea'
import { actionsTabLogic } from '~/toolbar/actions/actionsTabLogic'
import { List, Space } from 'antd'
import { ActionType } from '~/types'

interface ActionsListViewProps {
    actions: ActionType[]
}

export function ActionsListView({ actions }: ActionsListViewProps): JSX.Element {
    const { selectAction } = useActions(actionsTabLogic)
    return (
        <List
            itemLayout="horizontal"
            dataSource={actions}
            renderItem={(action, index) => (
                <List.Item onClick={() => selectAction(action.id || null)} style={{ cursor: 'pointer' }}>
                    <List.Item.Meta
                        title={
                            <Space>
                                <span
                                    className="inline-block text-right mr-1"
                                    // eslint-disable-next-line react/forbid-dom-props
                                    style={{
                                        width: Math.floor(Math.log10(actions.length) + 1) * 12 + 6,
                                    }}
                                >
                                    {index + 1}.
                                </span>
                                {action.name || <span className="italic text-muted-alt">Untitled</span>}
                            </Space>
                        }
                    />
                </List.Item>
            )}
        />
    )
}
