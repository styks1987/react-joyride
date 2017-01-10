# Handling joyride inside relatively positioned elements

Placing joyride inside an element that has a parent that is positionally
relative will cause the Beacon to be positioned incorrectly

In the example below the becon will be below my selector because it will be calculated assuming

```jsx
    <div>
        <!-- Assuming I cannot place joyride here -->
        <div style={{height: '100px'}}>
            Some content yo
        </div>
        <div style="position:relative">
            <Joyride ... />
            <div className="my-selector"></div>
        </div>
    </div>
```