package com.apolos.dsmeta.services;


import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.apolos.dsmeta.entities.Sale;
import com.apolos.dsmeta.repositories.SaleRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository saleRepository;
	
	
	public Page<Sale> findSales(String minDate, String maxDate, Pageable pageable) {
		
		LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());
		
		LocalDate minDateParse = minDate.equals("") ? today.minusDays(365) : LocalDate.parse(minDate);
		LocalDate maxDateParse = maxDate.equals("") ? today : LocalDate.parse(maxDate);
		
		return saleRepository.findSales(minDateParse, maxDateParse, pageable);
	}
	
}
