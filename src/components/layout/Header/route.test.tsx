import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "."

describe("初期レンダリング時のテスト" , () => {
    test("Header", () => {
        render(<Header/>);
        expect(screen.getByText("都道府県別人口比較サイト")).toBeInTheDocument();
    })
})