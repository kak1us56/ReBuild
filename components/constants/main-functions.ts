export function sizeHeight(setIsHeight: (active: boolean) => void) {
    const handleResize = () => setIsHeight(window.innerHeight < 704);

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => removeEventListener("resize", handleResize);
}