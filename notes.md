- Global useEffect : Add an entry in the FAQ about that, and maybe tell about global useEffect on layout part of Admin doc?
- SearchInput or TextInput? In the tutorial and in the doc both are used for fulltext search.
- Maybe add in the TextField doc a link to the FunctionField, to compose the field with 2 sources? The question I asked myself was "Ok, I want an TextField with 2 sources... how do I do that?"
- attribut sortBy sur ReferenceField : la doc laisse entendre qu'on peut filtrer sur un champ d'une référence. peut être préciser cette limitation.

- "Labeled" use was hard to find, It is mentioned in the [Input doc](https://marmelab.com/react-admin/Inputs.html#using-labeled), but not in the Field doc, and I was confused by that.

- use ReferenceField on nested object

- basePath error on ReferenceField. With this code :
  
```js
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@material-ui/core";
import React from "react";
import {
    NumberField,
    ReferenceField,
    ReferenceFieldController,
    TextField,
} from "react-admin";

export const OrderItems = ({ record, ...props }) => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="items">
                <TableHead>
                    <TableRow>
                        <TableCell>Reference</TableCell>
                        <TableCell align="right">Unit price</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {record.basket
                        ? record.basket.map((row) => (
                              <TableRow key={row.product_id}>
                                  <TableCell>
                                      <ReferenceField
                                          source="product_id"
                                          reference="products"
                                          record={row}
                                          link="show"
                                          {...props}
                                      >
                                          <TextField source="reference" />
                                      </ReferenceField>
                                  </TableCell>
                                  <TableCell align="right">
                                      <ReferenceField
                                          source="product_id"
                                          reference="products"
                                          resource="commands"
                                          record={row}
                                          link={false}
                                          //   basePath="/commands"
                                      >
                                          <NumberField
                                              source="price"
                                              options={{
                                                  style: "currency",
                                                  currency: "USD",
                                              }}
                                          />
                                      </ReferenceField>
                                  </TableCell>
                                  <TableCell align="right">
                                      {row.quantity}
                                  </TableCell>
                                  <TableCell align="right">
                                      <ReferenceFieldController
                                          source="product_id"
                                          reference="products"
                                          record={row}
                                          {...props}
                                      >
                                          {({ referenceRecord, ...props }) => {
                                              return (
                                                  <span>
                                                      {referenceRecord
                                                          ? referenceRecord.price *
                                                            row.quantity
                                                          : "-"}
                                                  </span>
                                              );
                                          }}
                                      </ReferenceFieldController>
                                  </TableCell>
                              </TableRow>
                          ))
                        : null}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

  ```
  
  ```
  TypeError: Cannot read property 'replace' of undefined

    at NonEmptyReferenceField (http://localhost:3000/static/js/vendors~main.chunk.js:151242:21)
    at ReferenceField (http://localhost:3000/static/js/vendors~main.chunk.js:151198:19)
    at td
    at TableCell (http://localhost:3000/static/js/vendors~main.chunk.js:28985:28)
    at WithStyles(ForwardRef(TableCell)) (http://localhost:3000/static/js/vendors~main.chunk.js:41952:31)
    at tr
    at TableRow (http://localhost:3000/static/js/vendors~main.chunk.js:29946:23)
    at WithStyles(ForwardRef(TableRow)) (http://localhost:3000/static/js/vendors~main.chunk.js:41952:31)
    at tbody
    at TableBody (http://localhost:3000/static/js/vendors~main.chunk.js:28784:23)
    at WithStyles(ForwardRef(TableBody)) (http://localhost:3000/static/js/vendors~main.chunk.js:41952:31)
    at table
    at Table (http://localhost:3000/static/js/vendors~main.chunk.js:28604:23)
    at WithStyles(ForwardRef(Table)) (http://localhost:3000/static/js/vendors~main.chunk.js:41952:31)
    at div
    at Paper (http://localhost:3000/static/js/vendors~main.chunk.js:20664:23)
    at WithStyles(ForwardRef(Paper)) (http://localhost:3000/static/js/vendors~main.chunk.js:41952:31)
    at TableContainer (http://localhost:3000/static/js/vendors~main.chunk.js:29153:23)
    at WithStyles(ForwardRef(TableContainer)) (http://localhost:3000/static/js/vendors~main.chunk.js:41952:31)
    at OrderItems (http://localhost:3000/main.f9beb1337007a059a8b7.hot-update.js:28:3)
    at div
    at Grid (http://localhost:3000/static/js/vendors~main.chunk.js:12619:35)
    at WithStyles(ForwardRef(Grid)) (http://localhost:3000/static/js/vendors~main.chunk.js:41952:31)
    at div
    at Grid (http://localhost:3000/static/js/vendors~main.chunk.js:12619:35)
    at WithStyles(ForwardRef(Grid)) (http://localhost:3000/static/js/vendors~main.chunk.js:41952:31)
    at div
    at CardContent (http://localhost:3000/static/js/vendors~main.chunk.js:5841:23)
    at WithStyles(ForwardRef(CardContent)) (http://localhost:3000/static/js/vendors~main.chunk.js:41952:31)
    at CardContentInner (http://localhost:3000/static/js/vendors~main.chunk.js:160821:25)
    at div
    at Paper (http://localhost:3000/static/js/vendors~main.chunk.js:20664:23)
    at WithStyles(ForwardRef(Paper)) (http://localhost:3000/static/js/vendors~main.chunk.js:41952:31)
    at Card (http://localhost:3000/static/js/vendors~main.chunk.js:5520:23)
    at WithStyles(ForwardRef(Card)) (http://localhost:3000/static/js/vendors~main.chunk.js:41952:31)
    at div
    at div
    at ShowView (http://localhost:3000/static/js/vendors~main.chunk.js:148624:23)
    at OrdersShowLayout (http://localhost:3000/static/js/main.chunk.js:1700:75)
    at RecordContextProvider (http://localhost:3000/static/js/vendors~main.chunk.js:108587:21)
    at ShowContextProvider (http://localhost:3000/static/js/vendors~main.chunk.js:109696:21)
    at ShowBase (http://localhost:3000/static/js/vendors~main.chunk.js:109601:21)
    at OrdersShow
    at WithPermissions (http://localhost:3000/static/js/vendors~main.chunk.js:106618:23)
    at Route (http://localhost:3000/static/js/vendors~main.chunk.js:212184:29)
    at Switch (http://localhost:3000/static/js/vendors~main.chunk.js:212386:29)
    at ResourceContextProvider (http://localhost:3000/static/js/vendors~main.chunk.js:115072:21)
    at ResourceRoutes (http://localhost:3000/static/js/vendors~main.chunk.js:114938:17)
    at Resource (http://localhost:3000/static/js/vendors~main.chunk.js:115010:15)
    at Route (http://localhost:3000/static/js/vendors~main.chunk.js:212184:29)
    at Switch (http://localhost:3000/static/js/vendors~main.chunk.js:212386:29)
    at RoutesWithLayout (http://localhost:3000/static/js/vendors~main.chunk.js:115116:21)
    at div
    at main
    at div
    at div
    at LayoutWithoutTheme (http://localhost:3000/static/js/vendors~main.chunk.js:161503:24)
    at WithStyles(LayoutWithoutTheme) (http://localhost:3000/static/js/vendors~main.chunk.js:41952:31)
    at withRouter(WithStyles(LayoutWithoutTheme)) (http://localhost:3000/static/js/vendors~main.chunk.js:212441:37)
    at Connect(withRouter(WithStyles(LayoutWithoutTheme))) (http://localhost:3000/static/js/vendors~main.chunk.js:209342:75)
    at ThemeProvider (http://localhost:3000/static/js/vendors~main.chunk.js:40654:24)
    at Layout (http://localhost:3000/static/js/vendors~main.chunk.js:161621:26)
    at Route (http://localhost:3000/static/js/vendors~main.chunk.js:212184:29)
    at Switch (http://localhost:3000/static/js/vendors~main.chunk.js:212386:29)
    at div
    at CoreAdminRouter (http://localhost:3000/static/js/vendors~main.chunk.js:114581:87)
    at Route (http://localhost:3000/static/js/vendors~main.chunk.js:212184:29)
    at Switch (http://localhost:3000/static/js/vendors~main.chunk.js:212386:29)
    at CoreAdminUI (http://localhost:3000/static/js/vendors~main.chunk.js:114790:15)
    at AdminUI
    at Router (http://localhost:3000/static/js/vendors~main.chunk.js:211819:30)
    at ConnectedRouter (http://localhost:3000/static/js/vendors~main.chunk.js:62615:7)
    at ConnectedRouterWithContext (http://localhost:3000/static/js/vendors~main.chunk.js:62712:25)
    at Connect(ConnectedRouterWithContext) (http://localhost:3000/static/js/vendors~main.chunk.js:209342:75)
    at TranslationProvider (http://localhost:3000/static/js/vendors~main.chunk.js:122942:28)
    at Provider (http://localhost:3000/static/js/vendors~main.chunk.js:209055:20)
    at CoreAdminContext (http://localhost:3000/static/js/vendors~main.chunk.js:114346:25)
```

To solve this we have to set basePath property manually

- Body margin has to be set to 0. Not found in the documentation...
- ShowBase : if you don't use ShowView you'll have to take care of loading record lifecycle. ie: check if record exists

- FilterLiveSearch doc doesn't mention the default behaviour of setting source='q' so by default a simple : <FilterLiveSearch/> would be enough.
