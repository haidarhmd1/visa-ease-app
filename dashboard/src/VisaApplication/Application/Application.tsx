import React from 'react';
import {
  Container,
  Divider,
  Grid,
  Paper,
  Select,
  Text,
  TextInput,
} from '@mantine/core';
import { useParams } from 'react-router-dom';
import { useStyles } from 'Account/Account.styled';

export const Application = () => {
  const { id } = useParams();
  const { classes } = useStyles();

  return (
    <Container size="xl" mt="md">
      <Paper radius="md" shadow="md" p="xl">
        <Grid>
          <Grid.Col xs={12}>
            <Text>{`Visa Application: ${id}`}</Text>
            <Divider />
          </Grid.Col>
        </Grid>

        <Grid mt="lg">
          <Grid.Col xs={6}>
            <TextInput
              label="Kundennr. (falls bekannt) / Client Number (if known)"
              placeholder="15329 Huston 21st"
              classNames={classes}
            />
          </Grid.Col>
          <Grid.Col xs={6}>
            <TextInput
              label="Bearbeitung / Processing:"
              placeholder="15329 Huston 21st"
              classNames={classes}
            />
          </Grid.Col>
          <Grid.Col xs={12}>
            <TextInput
              label="Ihre Referenz (wird auf der Rechnung aufgeführt) / Your reference (will be listed on the invoice) "
              placeholder="15329 Huston 21st"
              classNames={classes}
            />
          </Grid.Col>
          <Grid.Col xs={12}>
            <Select
              style={{ zIndex: 2 }}
              data={['Express', 'Standard']}
              placeholder="Pick one"
              label="Standard / Express"
              classNames={classes}
            />
          </Grid.Col>
        </Grid>
      </Paper>

      <Paper radius="md" shadow="md" p="xl" mt="xl">
        <Grid>
          <Grid.Col xs={12}>
            <Text>Auftraggeber/Customer</Text>
            <Divider />
          </Grid.Col>
        </Grid>

        <Grid mt="lg">
          <Grid.Col xs={6}>
            <TextInput
              label="Name, Vorname / Surame, first name"
              placeholder="15329 Huston 21st"
              classNames={classes}
            />
          </Grid.Col>
          <Grid.Col xs={6}>
            <TextInput
              label="Staatsbürgerschaft / Citizenship"
              placeholder="15329 Huston 21st"
              classNames={classes}
            />
          </Grid.Col>
          <Grid.Col xs={6}>
            <Select
              style={{ zIndex: 2 }}
              defaultValue="M"
              data={['M', 'W', 'D']}
              label="Geschlecht / Gender"
              classNames={classes}
            />
          </Grid.Col>
          <Grid.Col xs={6}>
            <TextInput
              label="Aufenthaltstitel / Residence permit"
              placeholder="15329 Huston 21st"
              classNames={classes}
            />
          </Grid.Col>
          <Grid.Col xs={6}>
            <TextInput
              label="Straße, Nr. / Street, Nr."
              placeholder="15329 Huston 21st"
              classNames={classes}
            />
          </Grid.Col>
          <Grid.Col xs={6}>
            <TextInput
              label="Beruf / Occupation"
              placeholder="15329 Huston 21st"
              classNames={classes}
            />
          </Grid.Col>
          <Grid.Col xs={6}>
            <TextInput
              label="PLZ, Stadt / ZIP code, city"
              placeholder="15329 Huston 21st"
              classNames={classes}
            />
          </Grid.Col>
          <Grid.Col xs={6}>
            <TextInput
              label="Zielland / Destination Country"
              placeholder="15329 Huston 21st"
              classNames={classes}
            />
          </Grid.Col>
          <Grid.Col xs={6}>
            <TextInput
              label="Land / Country"
              placeholder="15329 Huston 21st"
              classNames={classes}
            />
          </Grid.Col>
          <Grid.Col xs={6}>
            <TextInput
              label="Art des Visums / Kind of Visa"
              placeholder="15329 Huston 21st"
              classNames={classes}
            />
          </Grid.Col>
          <Grid.Col xs={6}>
            <TextInput
              label="E-Mail"
              placeholder="15329 Huston 21st"
              classNames={classes}
            />
          </Grid.Col>
          <Grid.Col xs={6}>
            <TextInput
              label="Reise-Beginndatum / Travel start date"
              placeholder="15329 Huston 21st"
              classNames={classes}
            />
          </Grid.Col>
          <Grid.Col xs={6}>
            <TextInput
              label="Telefon / Phone "
              placeholder="15329 Huston 21st"
              classNames={classes}
            />
          </Grid.Col>
          <Grid.Col xs={6}>
            <TextInput
              label="Rückflugdatum / Return flight date"
              placeholder="15329 Huston 21st"
              classNames={classes}
            />
          </Grid.Col>
          <Grid.Col xs={6}>
            <TextInput
              label="Fax / Fax"
              placeholder="15329 Huston 21st"
              classNames={classes}
            />
          </Grid.Col>
          <Grid.Col xs={12}>
            <Select
              style={{ zIndex: 2 }}
              defaultValue="Yes / Ja"
              data={['Yes / Ja', 'Nein / No']}
              label="Ankunftsflughafen ist gleich Abflughafen? / Arrival airport is the same as departure airport?"
              classNames={classes}
            />
          </Grid.Col>
          <Grid.Col xs={12}>
            <Select
              style={{ zIndex: 2 }}
              defaultValue="Yes / Ja"
              data={['Yes / Ja', 'Nein / No']}
              label="Kreuzfahrt / Cruise"
              classNames={classes}
            />
          </Grid.Col>
          <Grid.Col xs={12}>
            <Select
              style={{ zIndex: 2 }}
              defaultValue="Yes / Ja"
              data={['Yes / Ja', 'Nein / No']}
              label="Rechnungsempfänger ist auch Antragsteller?  / Invoice Recipient is same as Aplicant? "
              classNames={classes}
            />
          </Grid.Col>
          <Grid.Col xs={12}>
            <Select
              style={{ zIndex: 2 }}
              defaultValue="Yes / Ja"
              data={['Yes / Ja', 'Nein / No']}
              label="Halten Sie sich den gesamten Reisezeitraum ausschließlich in den Vereinigten Arabischen Emirate auf? / Will you spend the entire travel period exclusively in the United Arab Emirates?"
              classNames={classes}
            />
          </Grid.Col>
        </Grid>
      </Paper>

      <Paper radius="md" shadow="md" p="xl" mt="xl">
        <Grid>
          <Grid.Col xs={12}>
            <Text>Auftragsvergabe / Procurement</Text>
            <Divider />
          </Grid.Col>
        </Grid>

        <Grid mt="lg">
          <Grid.Col xs={6}>
            <TextInput
              label="Ort, Datum / Place and date"
              placeholder="15329 Huston 21st"
              classNames={classes}
            />
          </Grid.Col>
          <Grid.Col xs={6}>
            <TextInput
              label="Unterschrift / Signature"
              placeholder="15329 Huston 21st"
              classNames={classes}
            />
          </Grid.Col>
        </Grid>
      </Paper>
    </Container>
  );
};
