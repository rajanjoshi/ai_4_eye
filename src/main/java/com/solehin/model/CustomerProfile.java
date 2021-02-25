package com.solehin.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CustomerProfile {
   private String customerId;
   private String firstName;
   private String lastName;
   private Channel channel;
   private Long pin;

   private String cardNumber;
   private Long sessionTimeOut;

   private String sessionId;

}
