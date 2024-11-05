package com.tamthong.finance_tracker_api.repository;

import com.tamthong.finance_tracker_api.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
    Account findByUserIdAndId(Long userId, Long accountId);
    List<Account> findAllByUserId(Long userId);
    void deleteByUserIdAndId(Long userId, Long accountId);
    void deleteAllByUserId(Long userId);
}
