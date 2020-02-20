# Introduction 
Basic POC example of input-group created with Stencil, based on IgniteUI for Angular's existing input-group component.

# Getting Started
1.	To install dependencies.

From the root folder run:
```
npm install
```

2.	To start the basic sample.

From the root folder run:

```
npm start
```

3. Usage

You can template an input and label inside the input group:

```
<igc-input-group>
    <label>Phone</label>
    <input type="number" />
</igc-input-group>
```

Those are then used in the input group.

You can also define a prefix and suffix in a slot tag with the related name:

```
<igc-input-group>
    <span slot="prefix">+359</span>
    <label>Phone</label>
    <input type="number" />
    <span slot="suffix" class="material-icons icon">phone</span>
    </igc-input-group>
```

# Build and Test

```
npm run build
```
The output of the build is located under the `dist` folder.

# Contribute