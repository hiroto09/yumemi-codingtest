import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import PrefList from ".";


describe("PrefectureSection", () => {
    it("都道府県情報の表示", async () => {
        const result = await PrefList();
        render(result);
        expect(screen.getByText("北海道")).toBeInTheDocument();
    });
});

