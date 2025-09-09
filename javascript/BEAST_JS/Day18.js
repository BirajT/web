function divide(a, b) {
    try {
        console.log("Trying to divide:", a, "/", b);

        if (b === 0) {
            throw new Error("Division by zero is not allowed!");
        }

        let result = a / b;
        console.log("Result:", result);
    } catch (error) {
        console.log("Caught an error:", error.message);
    } finally {
        console.log("Finally block always runs (cleanup, closing files, etc.)");
    }
}

// Example calls
divide(10, 2);  // Works fine
console.log("------");
divide(10, 0);  // Throws error
