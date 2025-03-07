package com.Practice2.Practice2.service;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

public class ExcelHelper {

    public static List<List<String>> excelToDataList(InputStream is) {
        try {
            Workbook workbook = new XSSFWorkbook(is);
            Sheet sheet = workbook.getSheetAt(0);
            List<List<String>> records = new ArrayList<>();

            for (Row row : sheet) {
                List<String> rowData = new ArrayList<>();
                for (cell cell : row) {
                    rowData.add(cell.toString());
                }
                records.add(rowData);
            }
            workbook.close();
            return records;
        } catch (Exception e) {
            throw new RuntimeException("Failed to parse Excel file: " + e.getMessage());
        }
    }
}

