In TypeScript, both `type` and `interface` are used to define custom types, but they have subtle differences and use cases:

---

### **1. Definition and Syntax**

* **`type`:**

  * Used to define type aliases, including primitive types, unions, intersections, tuples, and more.
  * Syntax: `type Name = definition;`

    ```typescript
    type User = {
      name: string;
      age: number;
    };
    ```

* **`interface`:**

  * Specifically used to define the structure of an object, focusing on object types.
  * Syntax: `interface Name { definition }`

    ```typescript
    interface User {
      name: string;
      age: number;
    }
    ```

---

### **2. Extensibility**

* **`type`:**

  * Cannot be reopened to add new properties.
  * Extends other types using intersections.

    ```typescript
    type Address = { city: string };
    type User = { name: string } & Address; // Intersection
    ```

* **`interface`:**

  * Can be extended or reopened to add new properties.

    ```typescript
    interface Address {
      city: string;
    }
    interface User extends Address {
      name: string;
    }

    // Reopen and extend the interface
    interface User {
      age: number;
    }
    ```

---

### **3. Usage Scope**

* **`type`:**

  * Can define more than just objects, like unions, intersections, primitives, and function types.

    ```typescript
    type Primitive = string | number;
    type Callback = (input: string) => boolean;
    ```

* **`interface`:**

  * Primarily for object types, though it can define callable and indexable types.

    ```typescript
    interface Callback {
      (input: string): boolean;
    }
    ```

---

### **4. Merging**

* **`type`:**

  * Cannot merge declarations. Duplicate `type` declarations cause an error.

* **`interface`:**

  * Supports declaration merging.

    ```typescript
    interface User {
      name: string;
    }
    interface User {
      age: number;
    }

    // Merged: { name: string; age: number; }
    ```

---

### **5. Performance**

* `interface` is slightly more performant at compile time than `type` in some cases, especially for large and complex type definitions.

---

### **When to Use?**

* **Use `type`:**

  * When working with unions, intersections, or complex types (e.g., primitives, tuples, function types).
  * If you need flexibility for defining composite types.

* **Use `interface`:**

  * When defining object shapes or classes.
  * If you want to leverage declaration merging or extensibility.

---

### Example Comparison:

```typescript
// Using type
type UserType = {
  name: string;
  age: number;
};
type ExtendedType = UserType & { city: string };

// Using interface
interface UserInterface {
  name: string;
  age: number;
}
interface ExtendedInterface extends UserInterface {
  city: string;
}
```

Both can often be used interchangeably for objects, but pick based on your project's needs!
