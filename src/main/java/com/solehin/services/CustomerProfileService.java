package com.solehin.services;

import com.solehin.model.Channel;
import com.solehin.model.CustomerProfile;
import org.springframework.stereotype.Service;

@Service
public class CustomerProfileService {
    public CustomerProfile getValidateProfile(String cardNumber){
        return CustomerProfile.builder()
                .channel(Channel.AUDIO)
                .firstName("Somnath")
                .lastName("Pailwan")
                .customerId("1234")
                .sessionTimeOut(5l)
                .pin(1234l)
                .build();
    }
}
