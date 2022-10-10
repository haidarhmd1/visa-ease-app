import React from 'react';
import { Badge, Group, ScrollArea, Table, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { data } from './data.table';

export function ExpressVisaTable() {
  const navigate = useNavigate();

  const handleTableRowClick = (id: number) => navigate(`${id}`);
  const rows = data.map(item => (
    <tr
      key={item.id}
      onClick={() => handleTableRowClick(item.id)}
      style={{ cursor: 'pointer' }}
    >
      <td>
        <Group spacing="sm">
          <div>
            <Text size="sm" weight={500}>
              {item.name}
            </Text>
            <Text size="xs" color="dimmed">
              {item.email}
            </Text>
          </div>
        </Group>
      </td>

      <td>
        <Text size="sm" weight={500}>
          {item.name}
        </Text>
      </td>
      <td>{Math.floor(Math.random() * 6 + 5)} days ago</td>
      <td>
        {Math.random() > 0.5 ? (
          <Badge fullWidth>Pending</Badge>
        ) : (
          <Badge color="green" fullWidth>
            Finish
          </Badge>
        )}
      </td>
    </tr>
  ));
  return (
    <>
      <Text size="lg" mb="md" weight={500}>
        Express Visa Table
      </Text>
      <ScrollArea>
        <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Created</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
    </>
  );
}
